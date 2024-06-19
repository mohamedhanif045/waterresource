document.addEventListener('DOMContentLoaded', function () {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            populateWaterSources(data.waterSources);
            populateUsageData(data.waterUsage);
            populateWaterQualityInfo(data.waterQuality);
            populateConservationTips(data.conservation);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function populateWaterSources(waterSources) {
    const list = document.getElementById('water-sources-list');
    waterSources.forEach(source => {
        const item = document.createElement('div');
        item.className = 'source-item';
        item.innerHTML = `
            <h3>${source.name}</h3>
            <img src="${source.image}" alt="${source.name}" class="img-fluid">
            <p>${source.description}</p>
        `;
        list.appendChild(item);
    });
}

function populateUsageData(usageData) {
    const list = document.getElementById('usage-data');
    usageData.forEach(usage => {
        const item = document.createElement('div');
        item.className = 'usage-item';
        item.innerHTML = `
            <h3>${usage.type}</h3>
            <img src="${usage.image}" alt="${usage.type}" class="img-fluid">
            <p>${usage.amount}</p>
        `;
        list.appendChild(item);
    });
}

function populateWaterQualityInfo(qualityInfo) {
    const list = document.getElementById('quality-info');
    qualityInfo.forEach(info => {
        const item = document.createElement('div');
        item.className = 'quality-item';
        item.innerHTML = `
            <h3>${info.type}</h3>
            <img src="${info.image}" alt="${info.type}" class="img-fluid">
            <p>${info.status}</p>
        `;
        list.appendChild(item);
    });
}

function populateConservationTips(conservationTips) {
    const list = document.getElementById('conservation-tips');
    conservationTips.forEach(tip => {
        const item = document.createElement('div');
        item.className = 'tip-item';
        item.innerHTML = `
            <h3>${tip.title}</h3>
            <img src="${tip.image}" alt="${tip.title}" class="img-fluid">
            <p>${tip.description}</p>
        `;
        list.appendChild(item);
    });
}
