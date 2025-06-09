document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let selectedDate = new Date(document.getElementById("date").value);
    let dayOfWeek = selectedDate.getDay(); // 0 = Vasárnap, 6 = Szombat
    let address = document.getElementById("address").value.trim();
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (dayOfWeek !== 6 && dayOfWeek !== 0) {
        alert("Csak hétvégére foglalhatsz időpontot! Kérlek, válassz szombati vagy vasárnapi dátumot.");
        return;
    }

    if (address === "") {
        alert("Kérlek, add meg a címet a házhoz kiszálláshoz.");
        return;
    }

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        phone_number: phone,
        appointment_date: document.getElementById("date").value,
        address: address
    }, "YOUR_PUBLIC_KEY").then(function(response) {
        alert("Foglalás sikeresen elküldve! Email értesítést kapsz róla.");
        document.getElementById("confirmation-message").style.display = "block";
    }, function(error) {
        alert("Hiba történt az email küldésekor. Próbáld újra!");
    });
});
