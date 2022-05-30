export const convertToCurrency = (value: number): string => {
    const newValue = '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return newValue;
}
export const removeAccents = (value: string): string => {
    const accents = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return value.split('').map( letra => accents[letra] || letra).join('').toString();	
}

