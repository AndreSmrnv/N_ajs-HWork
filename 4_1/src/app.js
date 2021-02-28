// eslint-disable-next-line import/prefer-default-export
export function getLegend(user) {
  if (user.health < 15) {
    return 'critical';
  } if (user.health > 50) {
    return 'healthy';
  }
  return 'wounded';
}
// in-  {name: 'Маг', health: 90}
// out- critical(<15), wounded, healthy(>50)
