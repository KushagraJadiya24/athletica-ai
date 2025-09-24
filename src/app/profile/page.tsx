"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import NoFitnessPlan from "@/components/NoFitnessPlan";
import CornerElements from "@/components/CornerElements";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AppleIcon,
  CalendarIcon,
  DumbbellIcon,
  ActivityIcon,
  TargetIcon,
  ClockIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProfilePage = () => {
  const { user } = useUser();
  const userId = user?.id as string;

  const allPlans = useQuery(api.plans.getUserPlans, { userId });
  const [selectedPlanId, setSelectedPlanId] = useState<null | string>(null);

  const activePlan = allPlans?.find((plan) => plan.isActive);

  const currentPlan = selectedPlanId
    ? allPlans?.find((plan) => plan._id === selectedPlanId)
    : activePlan;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>

      <div className="relative z-10 pt-8 pb-16 container mx-auto px-4 max-w-6xl">
        <ProfileHeader user={user} />

        {allPlans && allPlans?.length > 0 ? (
          <div className="space-y-8 mt-12">
            {/* PLAN SELECTOR */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 shadow-2xl">
                <CornerElements />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      Your Fitness Plans
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <ActivityIcon className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm text-slate-300">
                      {allPlans.length} Plans
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {allPlans.map((plan) => (
                    <Button
                      key={plan._id}
                      onClick={() => setSelectedPlanId(plan._id)}
                      className={`relative group/btn transition-all duration-300 px-6 py-3 font-medium rounded-lg border ${
                        selectedPlanId === plan._id
                          ? "bg-primary/20 text-white border-primary shadow-lg shadow-primary/25 scale-105"
                          : "bg-slate-800/30 border-slate-600/50 text-slate-300 hover:bg-slate-700/40 hover:border-primary/50 hover:text-white hover:scale-105"
                      }`}
                    >
                      <span className="relative z-10">{plan.name}</span>
                      {plan.isActive && (
                        <span className="ml-3 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 font-mono">
                          ACTIVE
                        </span>
                      )}
                      {selectedPlanId === plan._id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg blur-sm"></div>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* PLAN DETAILS */}
            {currentPlan && (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl blur-2xl opacity-40"></div>
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                  <CornerElements />

                  {/* Header */}
                  <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-b border-white/10 p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse shadow-lg"></div>
                      <h3 className="text-2xl font-bold">
                        <span className="text-slate-400">PLAN:</span>{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {currentPlan.name}
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <Tabs defaultValue="workout" className="w-full">
                      <TabsList className="mb-8 w-full max-w-md mx-auto grid grid-cols-2 bg-slate-800/30 border border-slate-700/50 rounded-xl p-1">
                        <TabsTrigger
                          value="workout"
                          className="data-[state=active]:bg-primary/20 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-300 font-medium"
                        >
                          <DumbbellIcon className="mr-2 size-5" />
                          Workout Plan
                        </TabsTrigger>
                        <TabsTrigger
                          value="diet"
                          className="data-[state=active]:bg-primary/20 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-300 font-medium"
                        >
                          <AppleIcon className="mr-2 h-5 w-5" />
                          Diet Plan
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="workout" className="mt-0">
                        <div className="space-y-6">
                          {/* Schedule Info */}
                          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <CalendarIcon className="h-5 w-5 text-primary" />
                              <span className="font-semibold text-white">
                                Weekly Schedule
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {currentPlan.workoutPlan.schedule.map(
                                (day, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-lg border border-primary/30 font-mono"
                                  >
                                    {day}
                                  </span>
                                )
                              )}
                            </div>
                          </div>

                          <Accordion type="multiple" className="space-y-4">
                            {currentPlan.workoutPlan.exercises.map(
                              (exerciseDay, index) => (
                                <AccordionItem
                                  key={index}
                                  value={exerciseDay.day}
                                  className="border border-slate-700/50 rounded-xl overflow-hidden bg-slate-800/20 backdrop-blur-sm"
                                >
                                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5 font-semibold text-lg transition-all duration-300 group">
                                    <div className="flex justify-between w-full items-center">
                                      <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                                        <span className="text-white group-hover:text-primary transition-colors">
                                          {exerciseDay.day}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-lg">
                                        <ActivityIcon className="w-4 h-4 text-accent" />
                                        <span className="text-sm text-slate-300 font-mono">
                                          {exerciseDay.routines.length}{" "}
                                          exercises
                                        </span>
                                      </div>
                                    </div>
                                  </AccordionTrigger>

                                  <AccordionContent className="pb-6 px-6">
                                    <div className="space-y-4 mt-4">
                                      {exerciseDay.routines.map(
                                        (routine, routineIndex) => (
                                          <div
                                            key={routineIndex}
                                            className="group/card border border-slate-600/50 rounded-lg p-5 bg-slate-900/30 hover:bg-slate-800/40 transition-all duration-300 hover:border-primary/30"
                                          >
                                            <div className="flex justify-between items-start mb-3">
                                              <h4 className="font-semibold text-white text-lg group-hover/card:text-primary transition-colors">
                                                {routine.name}
                                              </h4>
                                              <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/20 border border-primary/30">
                                                  <TargetIcon className="w-4 h-4 text-primary" />
                                                  <span className="text-primary text-sm font-mono font-medium">
                                                    {routine.sets} sets
                                                  </span>
                                                </div>
                                                <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-accent/20 border border-accent/30">
                                                  <ActivityIcon className="w-4 h-4 text-accent" />
                                                  <span className="text-accent text-sm font-mono font-medium">
                                                    {routine.reps} reps
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            {routine.description && (
                                              <p className="text-slate-300 leading-relaxed">
                                                {routine.description}
                                              </p>
                                            )}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              )
                            )}
                          </Accordion>
                        </div>
                      </TabsContent>

                      <TabsContent value="diet" className="mt-0">
                        <div className="space-y-6">
                          {/* Calorie Target */}
                          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <TargetIcon className="h-6 w-6 text-primary" />
                                <span className="text-lg font-semibold text-white">
                                  Daily Calorie Target
                                </span>
                              </div>
                              <div className="text-right">
                                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-mono">
                                  {currentPlan.dietPlan.dailyCalories}
                                </div>
                                <div className="text-sm text-slate-400 font-mono">
                                  KCAL
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid gap-6">
                            {currentPlan.dietPlan.meals.map((meal, index) => (
                              <div
                                key={index}
                                className="group/meal border border-slate-700/50 rounded-xl overflow-hidden bg-slate-800/20 hover:bg-slate-800/40 transition-all duration-300 hover:border-primary/30"
                              >
                                <div className="bg-slate-900/50 px-6 py-4 border-b border-slate-700/50">
                                  <div className="flex items-center gap-3">
                                    <ClockIcon className="w-5 h-5 text-primary" />
                                    <h4 className="text-xl font-semibold text-white group-hover/meal:text-primary transition-colors">
                                      {meal.name}
                                    </h4>
                                  </div>
                                </div>
                                <div className="p-6">
                                  <ul className="space-y-3">
                                    {meal.foods.map((food, foodIndex) => (
                                      <li
                                        key={foodIndex}
                                        className="flex items-center gap-4 p-3 rounded-lg bg-slate-900/30 hover:bg-slate-800/40 transition-all duration-200"
                                      >
                                        <span className="flex items-center justify-center w-8 h-8 bg-primary/20 text-primary text-sm font-mono font-bold rounded-lg border border-primary/30">
                                          {String(foodIndex + 1).padStart(
                                            2,
                                            "0"
                                          )}
                                        </span>
                                        <span className="text-slate-200 font-medium">
                                          {food}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <NoFitnessPlan />
        )}
      </div>
    </section>
  );
};

export default ProfilePage;
