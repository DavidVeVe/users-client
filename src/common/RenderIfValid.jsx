function RenderIfValid({ children, isValid }) {
  return <>{isValid && children}</>;
}

export default RenderIfValid;
