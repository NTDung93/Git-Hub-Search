//app
//project này sẽ thao tác với api cua git hub
//client_id = "926f541fdc1e547541ed"
//client_secrets = "dd210027596caab3fcbe828e3aebb207dfc25226" 

//làm bộ api trước 
window.addEventListener("DOMContentLoaded", ()=>{
    document
        .querySelector("#form-search")
        .addEventListener("submit", async (event) => {
            event.preventDefault()
            const username = document.querySelector("#username").value;
            //tạo bộ công cụ
            let http = new Api()
            let ui = new Ui()

            try {
                let {profile, repos} = await http.getInfor(username)
                ui.render(profile, repos)
                ui.alert("Thành công dồi")
            } catch (error) {
                ui.alert("Không tìm được user", "danger")                
            }
        })
})