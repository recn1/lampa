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

    // Foglalás megerősítése felugró modal ablakban
    const confirmationModal = document.createElement("div");
    confirmationModal.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    background: white; padding: 20px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                    border-radius: 10px; text-align: center;">
            <h2>Foglalás sikeres!</h2>
            <p>Köszönjük, ${name}! A foglalásodat rögzítettük.</p>
            <p>Dátum: ${document.getElementById("date").value}</p>
            <p>Telefonszám: ${phone}</p>
            <p>Cím: ${address}</p>
            <button onclick="this.parentElement.style.display='none'" 
                    style="padding: 8px 16px; border: none; background: #007AFF; color: white; 
                           border-radius: 5px; cursor: pointer;">OK</button>
        </div>
    `;
    document.body.appendChild(confirmationModal);
});
