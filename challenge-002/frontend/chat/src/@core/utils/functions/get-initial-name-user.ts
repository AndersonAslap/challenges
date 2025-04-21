export const getInitialNameUser = (fullName: string): string => {
  const words = fullName.trim().toLowerCase().split(/\s+/); // divide por espaço
  
  if (words.length === 1) {
    return words[0][0]; // só tem um nome, retorna a primeira letra
  }

  // filtra palavras que não são preposições/artigos comuns (como "de", "da", etc.)
  const ignored = new Set(["de", "da", "do", "dos", "das", "e"]);
  const initials = words.filter(w => !ignored.has(w)).slice(0, 2).map(w => w[0]);

  return initials.join('');
}