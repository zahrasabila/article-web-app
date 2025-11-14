import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuthDialog } from "../store/authDialogStore";
import type React from "react";
import { RainbowButton } from "./ui/rainbow-button";

const Header: React.FC = () => {
  const { openLogin } = useAuthDialog();
  const navigate = useNavigate();

  return (
    <header className="border-b backdrop-blur-lg bg-white/30 border border-white/40  fixed w-full top-0 left-0 z-50 ">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="font-bold text-xl">Reisen</div>
          <div className="text-sm text-muted-foreground ">
            Travelling Blogsite
          </div>
        </div>
        <nav className="hidden md:flex gap-4 items-center">
          <RainbowButton
            onClick={() => navigate("/articles")}
            variant="outline"
          >
            Explore
          </RainbowButton>
          <Button variant="default" onClick={openLogin}>
            Sign in
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
