const API_URL = "https://folio.corentindesfarges.fr"

export const getIntroductions = async () => fetch(`${API_URL}/introductions`).then((response) => response.json())

export const getExperiences = async () => fetch(`${API_URL}/experiences`).then((response) => response.json())

export const getProjects = async () => fetch(`${API_URL}/projects`).then((response) => response.json())
