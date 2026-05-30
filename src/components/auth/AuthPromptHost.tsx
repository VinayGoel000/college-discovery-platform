"use client";

import { AuthEntryModal } from "@/components/auth/AuthEntryModal";
import { useAuth } from "@/context/AuthContext";

export function AuthPromptHost() {
  const { authPromptOpen, closeAuthPrompt } = useAuth();

  return <AuthEntryModal open={authPromptOpen} onClose={closeAuthPrompt} />;
}
