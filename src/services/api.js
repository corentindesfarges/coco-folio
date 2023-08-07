const API_URL = "https://folio.corentindesfarges.fr"

export const getIntroductions = async () => fetch(`${API_URL}/introductions`).then((response) => response.json())
