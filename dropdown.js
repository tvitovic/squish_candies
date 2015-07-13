function showElement(id) {
    document.getElementById(id).style.visibility = 'visible';
    document.getElementById('id-filter-by').style.border = '1px solid #D3D3D3'
    document.getElementById('id-filter-by').style.borderBottom = "none";
  }
  function hideElement(id) {
    document.getElementById(id).style.visibility = 'hidden';
    document.getElementById('id-filter-by').style.border = 'none';
  }