export const serverError = 'Wystąpił problem z serwerem. Przepraszamy.';
export const credentialsError = 'Nieprawidłowe login lub hasło.';
const usernameIsAlreadyTaken = "Login jest zajęty.";
const emailIsAlreadyTaken = "Adres email jest zajęty.";
const unknownError = "Nieznany błąd.";
const userDoesNotExist = "Użytkownik o podanym loginie nie istnieje.";
const invalidToken = "Token nie jest poprawny, spróbuj ponownie.";
const passwordAlreadyUsed = 'Podaj hasło, które różni sie od obecnego.';

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
    case 'User does not exist':{
      return userDoesNotExist;
    }
    case 'Token is invalid, try again':{
      return invalidToken;
    }
    case 'Password already used':{
      return passwordAlreadyUsed
    }
    default:
      return unknownError;
  }

}