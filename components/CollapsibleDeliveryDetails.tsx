"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { CheckoutForm } from "./CheckoutForm";

export default function DropdownCheckout() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="w-full">
      <button
        className="flex items-center justify-between w-full text-left bg-white  rounded-lg shadow-sm hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-2xl font-bold">Detalii de livrare</h1>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: contentHeight }}
            exit={{ height: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="overflow-hidden bg-white  border-gray-200 rounded-b-lg shadow-sm"
          >
            <div ref={contentRef}>
              <CheckoutForm onFormSubmitAction={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
