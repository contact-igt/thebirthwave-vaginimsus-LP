/** Signed circular distance keeps the previous, selected and next items adjacent. */
export const circularOffset = (index: number, active: number, count: number): number => {
  const distance = (index - active + count) % count;
  return distance > count / 2 ? distance - count : distance;
};
