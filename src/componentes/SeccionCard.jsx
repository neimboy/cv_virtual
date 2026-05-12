import React, { forwardRef } from 'react';

const SeccionCard = forwardRef(({ children, className = '', id, style, 'aria-label': ariaLabel }, ref) => (
  <section
    ref={ref}
    id={id}
    className={`card ${className}`}
    style={style}
    aria-label={ariaLabel}
  >
    {children}
  </section>
));

SeccionCard.displayName = 'SeccionCard';

export default SeccionCard;