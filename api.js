//api
//client_id = "926f541fdc1e547541ed"
//client_secrets = "dd210027596caab3fcbe828e3aebb207dfc25226" 

//tham khảo api của git tại : https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps

//Fetch Profile: https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}

//Fetch Repo: https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}

class Api{
    constructor(){
        this.client_id = "926f541fdc1e547541ed";
        this.client_secrets = "dd210027596caab3fcbe828e3aebb207dfc25226"
    }

    async getInfor(username){
        //lấy profile
        let profile = await fetch(
            `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        ).then(response => {
            if (response.ok) {
                return response.json()
            }else{
                throw new Error(response.statusText)
            }
        })

        //lấy repos
        let repos = await fetch(
            `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secrets}`
        ).then(response => {
            if (response.ok) {
                return response.json()
            }else{
                throw new Error(response.statusText)
            }
        })

        return {
            profile,
            repos
        }
    }
}

//test 

let http = new Api()
//đưa username sai thì lỗi 404
//bị ban thì lỗi 403
http.getInfor("NTDung93").then(value => {
     console.log(value);
}).catch(error => {
    console.log(error);
})