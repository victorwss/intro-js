describe('Conversão de Temperaturas', () => {
  
  it('20 graus Celsius deve retornar 68 graus Farenheit', () => expect(converterTemperatura(20, 'C', 'F')).toEqual(68));
  it('20 graus Celsius deve retornar 293.15 graus Kelvin', () => expect(converterTemperatura(20, 'C', 'K')).toEqual(293.15));
  it('20 graus Celsius deve retornar 20 graus Celsius', () => expect(converterTemperatura(20, 'C', 'C')).toEqual(20));
  it('23 graus Farenheit deve retornar -5 graus Celsius', () => expect(converterTemperatura(23, 'F', 'C')).toEqual(-5));
  it('23 graus Farenheit deve retornar 268.15 graus Kelvin', () => expect(converterTemperatura(23, 'F', 'K')).toEqual(268.15));
  it('23 graus Farenheit deve retornar 23 graus Farenheit', () => expect(converterTemperatura(23, 'F', 'F')).toEqual(23));
  it('273.15 graus Kelvin deve retornar 0 graus Celsius', () => expect(converterTemperatura(273.15, 'K', 'C')).toEqual(0));
  it('273.15 graus Kelvin deve retornar 32 graus Farenheit', () => expect(converterTemperatura(273.15, 'K', 'F')).toEqual(32));
  it('273.15 graus Kelvin deve retornar 273.15 graus Kelvin', () => expect(converterTemperatura(273.15, 'K', 'K')).toEqual(273.15));
  it('Escala original inexistente, volta null', () => expect(converterTemperatura(273.15, 'A', 'F')).toEqual(null));
  it('Escala convertida inexistente, volta null', () => expect(converterTemperatura(273.15, 'K', 'B')).toEqual(null));
});
