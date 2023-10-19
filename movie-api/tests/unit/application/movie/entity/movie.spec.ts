import { throws } from "assert";
import Movie from "../../../../../src/application/movie/entity/movie";

describe('Movie', () => {
  test('CreateMovieEntityInstance', () => {
    const movie = new Movie(
      0, 
      'Batman', 
      2013, 
      '13 de feveriro de 2013',
      '120 minutos',
      'ação, suspense',
      'asdasd',
      'Ben Affleck, Christian Bale',
      'https://google.com.br',
      'is simply dummy text of the printing and typesetting industry',
      []
    );

    expect(movie).toBeInstanceOf(Movie);
  });

  test('TestFailIfMovieTitleIsNull', () => {
    throws(() => {
      const movie = new Movie(
        0, 
        '', 
        2013, 
        '13 de feveriro de 2013',
        '120 minutos',
        'ação, suspense',
        'asdasd',
        'Ben Affleck, Christian Bale',
        'https://google.com.br',
        'is simply dummy text of the printing and typesetting industry',
        []
      );
    });
  });
});
