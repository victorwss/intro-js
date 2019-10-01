describe("Form 4 - Endereço", function() {
  
  beforeAll(function(){
    jasmine.getFixtures().fixturesPath = 'src';
  });

  beforeEach(function() {
    loadFixtures("form4.html");
    this.fixtures = $("#jasmine-fixtures");
    this.form = $("#form4");
    this.submit = jasmine.createSpy("submit").and.returnValue(false);
    this.form.submit(this.submit);
  });

  it("deve conter um campo de coleta de rua correto.", function() {
    expect("rua").toExists();
    expect("rua").toBeRequired();
    expect("rua").toHaveLabel();
    expect("rua").toHaveMaxlength(100);
    expect("rua").toBeText();
  });

  it("deve conter um campo de coleta de data de numero.", function() {
    expect("numero").toExists();
    expect("numero").toBeRequired();
    expect("numero").toHaveLabel();
    expect("numero").toBeNumber();
  });

  it("deve conter um campo de coleta de perfil do github correto.", function(){
    expect("estado").toExists();
    expect("estado").toBeRequired();
    expect("estado").toHaveLabel();
    expect("estado").toBeSelect();
    expect("estado").toHaveOptions([
      {value: "", text:""},
      {value: "SP", text:"São Paulo"},
      {value: "RJ", text:"Rio de Janeiro"},
      {value: "MG", text:"Minas Gerais"}
    ]);
  });

  it("deve conter um botão de submissão de formulário.", function(){
    expect(this.form).toExistSubmit("Salvar");
    expect(this.form).toExistReset("Limpar");
  });

  it("deve contar um formulário correto.", function(){
    expect(this.form).toValidate();
    expect(this.form).toPost();
  });

});

