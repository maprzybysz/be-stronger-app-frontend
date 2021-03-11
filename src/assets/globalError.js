export const serverError = 'Wystąpił problem z serwerem. Przepraszamy.';
export const credentialsError = 'Nieprawidłowe login lub hasło';
const usernameIsAlreadyTaken = "Login jest zajęty";
const emailIsAlreadyTaken = "Adres email jest zajęty";
const unknownError = "Nieznany błąd";


export const translateMessageError = (error) =>{
  switch(error){
    case 'User already exists':
      return usernameIsAlreadyTaken;
    case 'Email already exists':
      return emailIsAlreadyTaken;
    case 'Request failed with status code 401':
      return credentialsError;
    case 'Network Error':
      return serverError;
    default:
      return unknownError;
  }

}