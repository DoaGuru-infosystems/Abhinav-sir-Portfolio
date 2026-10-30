import React, { useRef } from 'react';

const MagneticButton = ({
  href,
  onClick,
  type = 'button',
  disabled = false,
  children = "Let's Talk!",
  className = '',
  iconClass = 'bi bi-arrow-right ms-1'
}) => {
  const spanRef = useRef(null);

  const updatePosition = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const parentOffsetLeft = rect.left + window.scrollX;
    const parentOffsetTop = rect.top + window.scrollY;
    const relX = e.pageX - parentOffsetLeft;
    const relY = e.pageY - parentOffsetTop;

    if (spanRef.current) {
      spanRef.current.style.top = `${relY}px`;
      spanRef.current.style.left = `${relX}px`;
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={`btn magnetic-button ${className}`}
        onMouseEnter={updatePosition}
        onMouseLeave={updatePosition}
        onClick={onClick}
      >
        {children}
        <i className={`icon ${iconClass}`} />
        <span ref={spanRef} />
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn magnetic-button ${className}`}
      onMouseEnter={updatePosition}
      onMouseLeave={updatePosition}
      onClick={onClick}
    >
      {children}
      <i className={`icon ${iconClass}`} />
      <span ref={spanRef} />
    </button>
  );
};

export default MagneticButton;
