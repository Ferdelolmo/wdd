import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showInstallButton, setShowInstallButton] = useState(false);

    useEffect(() => {
        const handler = (e: any) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);
            // Update UI notify the user they can install the PWA
            setShowInstallButton(true);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);

        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null);
        setShowInstallButton(false);
    };

    if (!showInstallButton) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center animate-in fade-in slide-in-from-bottom-4">
            <Button
                onClick={handleInstallClick}
                className="shadow-lg bg-blue-600 hover:bg-blue-700 text-white gap-2 rounded-full px-6"
                size="lg"
            >
                <Download className="w-4 h-4" />
                Install App
            </Button>
        </div>
    );
}
