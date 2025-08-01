export interface Guest {
  name: string;
  plusOne?: string;
  language: 'EN' | 'ES' | 'IT';
  slug: string;
}

// Sample guest data - replace with your actual data
export const guests: Guest[] = [
  {
    name: "John & Sarah",
    language: "EN",
    slug: "john"
  },
  {
    name: "María & Carlos", 
    language: "ES",
    slug: "maria"
  },
  {
    name: "Stefano & Monica",
    language: "IT", 
    slug: "stefano"
  },
  // Add more guests here based on your spreadsheet
];

export const getGuestBySlug = (slug: string): Guest | undefined => {
  return guests.find(guest => guest.slug === slug);
};