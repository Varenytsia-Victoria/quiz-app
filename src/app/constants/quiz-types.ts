type CategoryMap = {
  [key: number]: string;
};

const categories: CategoryMap = {
  9: 'General Knowledge',
  10: 'Books',
  11: 'Film',
  12: 'Music',
  13: 'Musicals & Theatres',
  14: 'Television',
  15: 'Video Games',
  16: 'Board Games',
  17: 'Science & Nature',
  18: 'Computers',
  19: 'Mathematics',
  20: 'Mythology',
  21: 'Sports',
  22: 'Geography',
  23: 'History',
  24: 'Politics',
  25: 'Art',
  26: 'Celebrities',
  27: 'Animals',
  28: 'Vehicles',
  29: 'Comics',
  30: 'Gadgets',
  31: 'Japanese Anime & Manga',
  32: 'Cartoon & Animations',
};

export function getCategoryName(categoryId: number): string {
  return categories[categoryId] || 'Unknown Category'; // Now TypeScript understands categoryId can index categories
}