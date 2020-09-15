class Job {
  constructor(
    public id: string,
    public source: string,
    public title: string,
    public description: string,
    public url: string,
    public location: string,
    public company: string,
    public company_url: string = "",
    public company_logo: string = "",
    public created_at: Date,
  ) {}
}

export default Job;