export function validateTitle(val) {
  const trimed = val.trim();
  if (trimed.length <= 4)
    // error
    return 'The title is too short';

  //   if (!/^[a-z ,.'-]+$/i.test(trimed)) return 'No numbers please';

  // no error
  return false;
}
