describe("Form 2 - Contato", function() {
  
  beforeAll(function(){
    jasmine.getFixtures().fixturesPath = 'src';
  });

  beforeEach(function() {
    loadFixtures("form2.html");
    this.fixtures = $("#jasmine-fixtures");
    this.form = $("#form2");
    this.submit = jasmine.createSpy("submit").and.returnValue(false);
    this.form.submit(this.submit);
  });

  it("deve conter um campo de coleta de e-mail correto.", function() {
    expect("email").toExists();
    expect("email").toBeRequired();
    expect("email").toHaveLabel();
    expect("email").toBeEmail();
  });

  it("deve conter um campo de coleta de assunto correto.", function() {
    expect("assunto").toExists();
    expect("assunto").toBeRequired();
    expect("assunto").toHaveLabel();
    expect("assunto").toBeSelect();
    expect("assunto").toHaveOptions(["", "Problemas", "Reclamação", "Sugestão"]);
  });

  it("deve conter um campo de coleta de mensagem correto.", function(){
    expect("mensagem").toExists();
    expect("mensagem").toBeRequired();
    expect("mensagem").toHaveLabel();
    expect("mensagem").toBeTextarea();
  });

  it("deve conter um campo de coleta de tipo de resposta correto.", function(){
    expect("tipo-resposta").toExists();
    expect("tipo-resposta").toBeNotRequired();
    expect("tipo-resposta").toHaveLabel();
    expect("tipo-resposta").toBeCheckbox();
    expect("tipo-resposta").toHaveList([
      {value: "T", text: "Telefone"},
      {value: "E", text: "E-mail"},
      {value: "C", text: "Correio"}
    ]);
  });

  it("deve conter um botão de submissão de formulário.", function(){
    expect(this.form).toExistSubmit("Enviar");
  });

  it("deve contar um formulário correto.", function(){
    expect(this.form).toValidate();
    expect(this.form).toPost();
  });

});
