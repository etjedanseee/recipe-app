export const calcRate = (oldRate, rate, likes) => {
  const newScore = ((oldRate * likes) + rate) / (likes + 1)
  return { rate: newScore, likes: likes + 1 }
}