// import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Dialog,
  // DialogClose,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "../ui/dialog";
import { useAuthDialog } from "../../store/authDialogStore";
import { X } from "lucide-react";
import { Label } from "../ui/label";

export default function AuthDialog() {
  const { isOpen, mode, close } = useAuthDialog();

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {mode === "login" ? "Login" : "Daftar"}
          </DialogTitle>
          <button
            onClick={close}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {mode === "register" && (
            <div className="grid gap-2">
              <Label htmlFor="name">Nama</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
          )}

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="mail@contoh.com" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>

          <Button className="w-full">
            {mode === "login" ? "Masuk" : "Daftar"}
          </Button>

          <div className="text-center text-sm">
            {mode === "login" ? (
              <>
                Belum punya akun?{" "}
                <button
                  onClick={() => useAuthDialog.getState().openRegister()}
                  className="underline"
                >
                  Daftar
                </button>
              </>
            ) : (
              <>
                Sudah punya akun?{" "}
                <button
                  onClick={() => useAuthDialog.getState().openLogin()}
                  className="underline"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
