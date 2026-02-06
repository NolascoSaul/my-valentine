"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

function HeartConfetti() {
  const hearts = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 2,
    size: 12 + Math.random() * 20,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -50, x: `${heart.x}vw`, opacity: 1, rotate: 0 }}
          animate={{
            y: "110vh",
            rotate: [0, 180, 360],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "easeIn",
          }}
          className="absolute"
        >
          <Heart
            fill="#C70039"
            stroke="#C70039"
            style={{ width: heart.size, height: heart.size }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function Envelope({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      className="cursor-pointer"
      onClick={onClick}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-72 h-48 sm:w-80 sm:h-52">
        <div className="absolute inset-0 bg-pink-200 rounded-lg shadow-lg" />
        <div
          className="absolute top-0 left-0 right-0 h-24 bg-pink-300"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-36 sm:h-40 bg-pink-100 rounded-b-lg shadow-inner" />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-36 sm:h-40 bg-pink-200"
          style={{ clipPath: "polygon(0 100%, 100% 0, 0 0)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-1/2 h-36 sm:h-40 bg-pink-200"
          style={{ clipPath: "polygon(100% 100%, 0 0, 100% 0)" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 z-10"
          style={{ x: "-50%", y: "-50%" }}
          whileHover={{
            rotate: [0, -10, 10, -10, 10, 0],
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-16 h-16 bg-[#C70039] rounded-full flex items-center justify-center shadow-lg">
            <div className="absolute inset-1 rounded-full border-2 border-red-300/30" />
            <Heart className="w-8 h-8 text-pink-100" fill="currentColor" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function FlowerAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 1, y: 50 }}
      animate={{ scale: [0, 1.3, 1], opacity: 1, y: 0 }}
      transition={{ duration: 1.75, ease: "easeOut" }}
      onAnimationComplete={onComplete}
      className="flex items-center justify-center"
    >
      <img
        src="flower.webp"
        alt="Blooming rose"
        className="w-64 h-64 object-contain"
      />
    </motion.div>
  );
}

function DodgingNoButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleHover = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setPosition({ x: randomX, y: randomY });
  };

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
    >
      <Button
        onMouseEnter={handleHover}
        onClick={handleHover}
        onTouchStart={handleHover}
        variant="outline"
        className="bg-transparent hover:bg-muted text-muted-foreground font-handwritten text-xl py-6 px-8 rounded-full border-2 border-muted-foreground/30"
      >
        No
      </Button>
    </motion.div>
  );
}

function InvitationCard({ onYes }: { onYes: () => void }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      className="w-full max-w-xs sm:max-w-sm mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-200">
        {/* Header Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gradient-to-b from-pink-100 to-pink-50 pt-6 pb-4 flex justify-center"
        >
          <img
            src="myMelody.webp"
            alt="My Melody"
            className="w-28 h-28 sm:w-64 sm:h-64 object-contain drop-shadow-md"
          />
        </motion.div>

        <div className="px-6 pb-8 pt-4 text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-[#C70039] mb-3 tracking-tight"
            style={{ fontFamily: "var(--font-handwritten), cursive" }}
          >
            Date casera
          </motion.h1>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg sm:text-xl text-[#C70039] font-medium mb-4"
          >
            14 de Febrero
          </motion.p>

          {/* Romantic Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-base sm:text-lg text-foreground/70 italic mb-6 leading-relaxed px-2"
          >
            Just us and our love.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="h-px bg-pink-200 mb-6 mx-4"
          />

          {/* Question */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-xl sm:text-2xl text-[#C70039] font-semibold mb-6"
            style={{ fontFamily: "var(--font-handwritten), cursive" }}
          >
            {"Will you be my Valentine?"}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="flex flex-row gap-3 items-center justify-center"
          >
            <Button
              onClick={onYes}
              className="flex-1 bg-[#C70039] hover:bg-[#a50030] text-white text-lg sm:text-xl py-5 sm:py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold"
            >
              {"Yes!"}
            </Button>
            <DodgingNoButton />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ValentineCard() {
  const [stage, setStage] = useState<"envelope" | "flower" | "letter">(
    "envelope",
  );
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnvelopeClick = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/song.mp3");
      audioRef.current.loop = true;
    }
    audioRef.current.play().catch(() => {
      console.log("Autoplay prevented");
    });
    setStage("flower");
  };

  const handleFlowerComplete = () => {
    setStage("letter");
  };

  const handleYes = () => {
    setShowConfetti(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0.1 }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          >
            <Heart
              className="w-6 h-6 sm:w-8 sm:h-8 text-pink-300/40"
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      {showConfetti && <HeartConfetti />}

      <AnimatePresence mode="wait">
        {stage === "envelope" && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Envelope onClick={handleEnvelopeClick} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 font-handwritten text-xl sm:text-2xl text-center text-foreground"
            >
              A letter for Artemiza.
              <br />
              <span className="text-muted-foreground text-lg sm:text-xl">
                Toca para abrir.
              </span>
            </motion.p>
          </motion.div>
        )}

        {stage === "flower" && (
          <motion.div
            key="flower"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <FlowerAnimation onComplete={handleFlowerComplete} />
          </motion.div>
        )}

        {stage === "letter" && (
          <motion.div
            key="letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-md"
          >
            <InvitationCard onYes={handleYes} />

            {showConfetti && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="mt-6 text-center"
              >
                <p className="font-handwritten text-2xl sm:text-3xl text-[#C70039]">
                  {"I love you so much!"}
                </p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="mt-2"
                >
                  <Heart
                    className="w-12 h-12 mx-auto text-[#C70039]"
                    fill="currentColor"
                  />
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
