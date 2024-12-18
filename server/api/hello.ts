export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig();
  return {
    value: runtimeConfig.var2
  }
})
