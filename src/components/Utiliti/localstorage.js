const getStoredDonataion = () =>{
    const storedDonataion = localStorage.getItem('Donataions');
    if(storedDonataion){
        return JSON.parse(storedDonataion);
    }
    return [];
}


const saveDonataion = id =>{
    const storedDonataions = getStoredDonataion();
    const exists = storedDonataions.find(jobId => jobId === id);
    if(!exists){
        storedDonataions.push(id);
        localStorage.setItem('Donataions', JSON.stringify(storedDonataions))
    }
}

export { getStoredDonataion, saveDonataion}