import { client } from '../lib/sanity';

export const fetchProjects = async () => {
  const query = '*[_type == "project"] | order(_createdAt desc)';
  return client.fetch(query);
};

export const fetchAbout = async () => {
  const query = '*[_type == "about"][0]';
  return client.fetch(query);
};

export const fetchExperience = async () => {
  const query = '*[_type == "experience"] | order(year desc)';
  return client.fetch(query);
};