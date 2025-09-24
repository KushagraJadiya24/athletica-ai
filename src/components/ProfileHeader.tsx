import { UserResource } from "@clerk/types";
import CornerElements from "./CornerElements";
import {
  UserIcon,
  MailIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from "lucide-react";

const ProfileHeader = ({ user }: { user: UserResource | null | undefined }) => {
  if (!user) return null;

  return (
    <div className="relative group mb-12">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

      {/* Main Container */}
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <CornerElements />

        {/* Animated Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>

        <div className="p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            {/* Profile Image Section */}
            <div className="relative group/avatar">
              <div className="relative">
                {/* Animated Ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-sm opacity-30 group-hover/avatar:opacity-60 transition-opacity duration-300 animate-gradient-shift"></div>

                {user.imageUrl ? (
                  <div className="relative w-28 h-28 overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl group-hover/avatar:scale-105 transition-transform duration-300">
                    <img
                      src={user.imageUrl}
                      alt={user.fullName || "Profile"}
                      className="w-full h-full object-cover"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                ) : (
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 flex items-center justify-center border-2 border-white/20 shadow-2xl group-hover/avatar:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-bold text-white drop-shadow-lg">
                      {user.fullName?.charAt(0) || (
                        <UserIcon className="w-12 h-12" />
                      )}
                    </span>
                  </div>
                )}

                {/* Status Indicator */}
                <div className="absolute -bottom-1 -right-1 flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-green-500 border-3 border-slate-900 shadow-lg flex items-center justify-center">
                    <CheckCircleIcon className="w-3 h-3 text-white" />
                  </div>
                  <div className="absolute inset-0 w-6 h-6 rounded-full bg-green-500/50 animate-ping"></div>
                </div>
              </div>
            </div>

            {/* User Information Section */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                {/* Name and Title */}
                <div className="space-y-2">
                  <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                      {user.fullName || "User"}
                    </span>
                  </h1>
                  <div className="flex items-center gap-2">
                    <ShieldCheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-slate-400 font-medium">
                      Verified Account
                    </span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-3">
                  <div className="group/status relative overflow-hidden bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl px-4 py-2 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 translate-x-[-100%] group-hover/status:translate-x-[100%] transition-transform duration-700"></div>
                    <div className="relative flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-sm shadow-green-500/50"></div>
                      <span className="text-sm font-mono font-semibold text-green-400">
                        ONLINE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Divider */}
              <div className="relative mb-6">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                <div className="absolute top-0 left-0 h-px w-32 bg-gradient-to-r from-primary to-accent animate-shimmer"></div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                    <MailIcon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-300 font-medium">
                      {user.primaryEmailAddress?.emailAddress ||
                        "No email provided"}
                    </p>
                    <p className="text-xs text-slate-500 font-mono">
                      Primary Email
                    </p>
                  </div>
                  <div className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-md border border-primary/30 font-mono">
                    VERIFIED
                  </div>
                </div>

                {/* Additional Stats */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
      </div>
    </div>
  );
};

export default ProfileHeader;
