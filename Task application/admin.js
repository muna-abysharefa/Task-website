
 document.getElementById('toggle').addEventListener('click', function responsive(e){
   e.preventDefault();
        let side =document.getElementById('sidemenue');
      if(side.className === "col-xl-2 openside"){
        side.className="closeside";
        document.getElementById('main').className="col-xl-12";
    }
     else{
           side.className = "col-xl-2 openside";
           document.getElementById('main').className="col-xl-10";
         }
    } );
    
    $(document).ready( function () {
        $('#myTable').DataTable();
    } );
    
    
    //edit task
    $('#editModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('Edit Task ')
        modal.find('.modal-body input').val(recipient)
      });


    function Addrow(top){
      
       var task=document.getElementById("addtask").value;
      var name =document.getElementById("asignee").value;
      var description =document.getElementById("descr").value;
      var time =document.getElementById("date").value;
      var table=document.getElementById("myTable");
      var id;
   
          if(top){
                var row =table.insertRow(0);
             }
             else{
                 var row =table.insertRow();
                 }
                  var cell=row.insertCell();
                  cell.innerHTML=id; 
                 cell= row.insertCell();
                 cell.innerHTML=task;
                 cell= row.insertCell();
                 cell.innerHTML=name;
                 cell= row.insertCell();
                 cell.innerHTML=description;
                 cell= row.insertCell();
                 cell.innerHTML=time;
                  cell= row.insertCell();
                 cell.innerHTML = `<button class="btn btn-info text-light" data-toggle="modal" data-target="#editModal" id="editbutton">
                 <i class="fas fa-pen-alt"></i>
             </button> , <button class="btn btn-danger text-light" data-toggle="modal" data-target="#deleteModal" onclick="deleteRow(this)">
             <i class="fas fa-trash-alt"></i>
         </button>`;
             cell= row.insertCell();
    
                addautoNumber();
      }
          
      var addautoNumber = function () {
        $('table tbody tr').each(function(index) {
            $(this).find('td:nth-child(1)').html(index+1);
        });
    };

    //edit task 

    // function edit_task(num){
    //          document.getElementById("editbutton" + num);
    //          var task=document.getElementById("titletask" + num);
    //          var name =document.getElementById("asignee" + num);
    //          var description =document.getElementById("descr" + num);
    //          var time =document.getElementById("date" + num);
    // }
      // delete task model

      $('#deleteModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        var modal = $(this)
        modal.find('.modal-title').text('Delete Task ')
        modal.find('.modal-body input').val(recipient)
      });

      // delete task

      function deleteRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
        reindex();
    }
    
    function reindex() {
      const num = document.querySelectorAll("tr > td:nth-child(1)");
      num.forEach( (e, i) => { e.innerText=(i+1) } );
    }

   

   