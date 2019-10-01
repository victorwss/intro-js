describe("Form 5 - Pedidos", function() {
  
  beforeAll(function(){
    jasmine.getFixtures().fixturesPath = 'src';
  });

  beforeEach(function() {
    loadFixtures("form5.html");
    this.fixtures = $("#jasmine-fixtures");
    this.form = $("#form5");
    this.submit = jasmine.createSpy("submit").and.returnValue(false);
    this.form.submit(this.submit);
  });

  it("deve conter um campo de coleta de produto correto.", function() {
    expect("produto").toExists();
    expect("produto").toBeRequired();
    expect("produto").toHaveLabel();
    expect("produto").toBeSelect();
    expect("produto").toHaveOptions([
      "", "Pizza", "Yakissoba", "Feijoada"
    ]);
  });

  it("deve conter um campo de coleta de quantidade correto.", function() {
    expect("quantidade").toExists();
    expect("quantidade").toBeRequired();
    expect("quantidade").toHaveLabel();
    expect("quantidade").toBeNumber();
    expect("quantidade").toHaveMax(8);
    expect("quantidade").toHaveMin(1);
    expect("quantidade").toHaveDefault(1);
  });

  it("deve conter um campo de coleta de observações correto.", function(){
    expect("observacoes").toExists();
    expect("observacoes").toBeNotRequired();
    expect("observacoes").toHaveLabel();
    expect("observacoes").toBeTextarea();
    expect("observacoes").toHaveDefault("Por favor, escreva aqui suas observações!");
  });

  it("deve conter um botão de submissão de formulário.", function(){
    expect(this.form).toExistSubmit("Pedir");
  });

  it("deve contar um formulário correto.", function(){
    expect(this.form).toValidate();
    expect(this.form).toPost();
  });

});

