"use client";

import { useRouter } from "next/navigation";
import Playground from "../../components/Playground";

export default function PlaygroundPage() {
  const router = useRouter();

  const handleOpenPlayground = () => {
    // This function is passed to the Playground component but not used on this page
    // since we're already on the playground page
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Playground onOpenPlayground={handleOpenPlayground} />
    </div>
  );
}
