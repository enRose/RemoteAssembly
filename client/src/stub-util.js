
export const fakePromise = (stubFunc) =>
  Promise.resolve({
    json: stubFunc,
    ok: true
  })