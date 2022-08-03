const monthSelect = document.getElementById('monthSelect');
let defaultOption = '<option>Month</option>'
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
for (let i = 0; i < month.length; i++) {
    defaultOption = defaultOption.concat(`<option>${month[i]}</option>`)
}

monthSelect.innerHTML = defaultOption;
