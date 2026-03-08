const FAVORITES_KEY = 'favoriteCountries';

export function getFavorites(): string[] {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveFavorites(favorites: string[]) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function toggleFavorite(countryCode: string) {
  const favorites = getFavorites();

  const index = favorites.indexOf(countryCode);

  if (index === -1) {
    favorites.push(countryCode);
  } else {
    favorites.splice(index, 1);
  }

  saveFavorites(favorites);
}

export function isFavorite(countryCode: string): boolean {
  const favorites = getFavorites();
  return favorites.includes(countryCode);
}

export function clearFavorites() {
  localStorage.removeItem(FAVORITES_KEY);
}