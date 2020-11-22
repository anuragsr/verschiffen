// export const l = console.log.bind(window.console)
export const l = () => {}
export const cl = console.clear.bind(window.console)
export const getTriggerHook = () => window.innerWidth <= 768 ? .8 : .6