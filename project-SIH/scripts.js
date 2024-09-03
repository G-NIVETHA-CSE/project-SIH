document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const farmerSearch = document.getElementById('farmerSearch');
    const farmerDetails = document.getElementById('farmerDetails');
    const farmerName = document.getElementById('farmerName');
    const farmerDescription = document.getElementById('farmerDescription');
    const investmentAmount = document.getElementById('investmentAmount');
    const farmerImage = document.getElementById('farmerImage');

    searchBtn.addEventListener('click', () => {
        const farmer = searchFarmer(farmerSearch.value);
        if (farmer) {
            farmerName.textContent = farmer.name;
            farmerDescription.textContent = farmer.description;
            investmentAmount.textContent = farmer.amount;
            farmerImage.src = farmer.image;
            farmerDetails.classList.remove('hidden');
        } else {
            alert('Farmer not found');
        }
    });

    function searchFarmer(name) {
        const farmers = [
            {
                name: 'John Doe',
                description: 'An experienced farmer with over 20 years of experience in sustainable agriculture.',
                amount: '5000',
                image: 'john_doe.jpg'
            },
            {
                name: 'Jane Smith',
                description: 'A young and innovative farmer specializing in organic farming.',
                amount: '3000',
                image: 'jane_smith.jpg'
            }
        ];

        return farmers.find(farmer => farmer.name.toLowerCase() === name.toLowerCase());
    }
});

const investmentHistory = [
    {
        investorName: 'Alice Johnson',
        farmerName: 'John Doe',
        amountInvested: 5000,
        profitEarned: 700,
        date: '2019-03-15'
    },
    {
        investorName: 'Mary Kerl',
        farmerName: 'John Doe',
        amountInvested: 10000,
        profitEarned: 1000,
        date: '2020-05-23'
    },
    {
        investorName: 'Pearl James',
        farmerName: 'John Doe',
        amountInvested: 50000,
        profitEarned: 7000,
        date: '2023-04-11'
    },

    {
        investorName: 'Bob Smith',
        farmerName: 'Jane Smith',
        amountInvested: 3000,
        profitEarned: 500,
        date: '2017-04-10'
    },
    
    {
        investorName: 'Martin James',
        farmerName: 'Jane Smith',
        amountInvested: 30000,
        profitEarned: 5000,
        date: '2018-03-11'
    },
    
    {
        investorName: 'Bob Kerl',
        farmerName: 'Jane Smith',
        amountInvested: 6000,
        profitEarned: 750,
        date: '2023-07-23'
    }
];

const viewHistoryBtn = document.getElementById('viewHistoryBtn');

    if (viewHistoryBtn) {
        viewHistoryBtn.addEventListener('click', () => {
            const farmerName = document.getElementById('farmerName').textContent;
            location.href = `history.html?farmer=${encodeURIComponent(farmerName)}`;
        });
    }


    const urlParams = new URLSearchParams(window.location.search);
    const farmerName = urlParams.get('farmer');

    // Filter the history data based on the farmer's name
    const filteredHistory = investmentHistory.filter(entry => entry.farmerName === farmerName);

    // Populate the history table with filtered data
    const historyTableBody = document.getElementById('historyTableBody');
    filteredHistory.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.investorName}</td>
            <td>${entry.farmerName}</td>
            <td>${entry.amountInvested}</td>
            <td>${entry.profitEarned}</td>
            <td>${entry.date}</td>
        `;
        historyTableBody.appendChild(row);
    });



