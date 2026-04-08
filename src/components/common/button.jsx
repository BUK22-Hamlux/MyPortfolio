import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

function Button({ href, onClick, children, variant, type, download, ...props }) {
  const Component = href ? motion.a : motion.button;
  const base = 'relative h-fit font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-1';
  const variantClass = variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-500/25'
    : 'bg-transparent border hover:shadow-slate-900/50';

  return (
    <Component
      variants={buttonVariants}
      href={href}
      id={props.id}
      onClick={onClick}
      type={type || (href ? undefined : 'button')}
      download={download}
      {...props}
      className={`${base} ${variantClass} ${props.optionalClasses || ''}`}
      style={{fontFamily:'Syne,sans-serif'}}
    >
      {children}
    </Component>
  );
}

export default Button;
