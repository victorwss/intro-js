describe("Form 3 - Perfil", function() {
  
  beforeAll(function(){
    jasmine.getFixtures().fixturesPath = 'src';
  });

  beforeEach(function() {
    loadFixtures("form3.html");
    this.fixtures = $("#jasmine-fixtures");
    this.form = $("#form3");
    this.submit = jasmine.createSpy("submit").and.returnValue(false);
    this.form.submit(this.submit);
  });

  it("deve conter um campo de coleta de nome completo correto.", function() {
    expect("nome-completo").toExists();
    expect("nome-completo").toBeRequired();
    expect("nome-completo").toHaveLabel();
    expect("nome-completo").toHaveMaxlength(120);
    expect("nome-completo").toBeText();
  });

  it("deve conter um campo de coleta de data de nascimento correto.", function() {
    expect("nascimento").toExists();
    expect("nascimento").toBeRequired();
    expect("nascimento").toHaveLabel();
    expect("nascimento").toBeDate();
  });

  it("deve conter um campo de coleta de perfil do github correto.", function(){
    expect("github").toExists();
    expect("github").toBeNotRequired();
    expect("github").toHaveLabel();
    expect("github").toBeUrl();
  });

  it("deve conter um campo de coleta de sexo correto.", function(){
    expect("sexo").toExists();
    expect("sexo").toBeRequired();
    expect("sexo").toHaveLabel();
    expect("sexo").toBeRadio();
    expect("sexo").toHaveList([
      {value: "M", text: "Masculino"},
      {value: "F", text: "Feminino"},
    ]);
  });

  it("deve conter um botão de submissão de formulário.", function(){
    expect(this.form).toExistSubmit("Salvar");
  });

  it("deve contar um formulário correto.", function(){
    expect(this.form).toValidate();
    expect(this.form).toPost();
  });

});
