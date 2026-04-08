import { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      4500,
    );
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const icons = {
    success: "bx bx-check-circle",
    error: "bx bx-error-circle",
    info: "bx bx-info-circle",
  };
  const colors = {
    success: "border-green-500/50 text-green-400",
    error: "border-red-500/50 text-red-400",
    info: "border-blue-500/50 text-blue-400",
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-4 right-4 z-9999 flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 120, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800 border ${colors[toast.type]} shadow-2xl max-w-xs`}
            >
              <i className={`${icons[toast.type]} text-xl flex shrink-0`}></i>
              <p className="text-white text-sm font-medium flex-1">
                {toast.message}
              </p>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-slate-400 hover:text-white ml-1"
              >
                <i className="bx bx-x text-lg"></i>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
