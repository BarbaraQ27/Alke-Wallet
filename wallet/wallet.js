// JQuery deposito/retiro

$(document).ready(function() {
  var balance = 0;

  function updateBalance() {
    $('#balance').text(balance.toFixed(2));
  }

  $('#depositBtn').click(function() {
    var amount = parseFloat($('#amount').val());
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      updateBalance();
      $('#amount').val('');
      alert('Deposit realizado!');
    } else {
      alert('Monto invalido. Por favor ingrese un número positivo.');
    }
  });

  $('#withdrawBtn').click(function() {
    var amount = parseFloat($('#amount').val());
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      balance -= amount;
      updateBalance();
      $('#amount').val('');
      alert('Retiro exitoso!');
    } else {
      alert('Cantidad no válida. Ingrese un número válido dentro de su saldo.');
    }
  });
});

// JQuery flip card 

$("#card").flip({
  trigger: 'click'
});

$("#card2").flip({
  trigger: 'click'
});

$("#card3").flip({
  trigger: 'click'
});
