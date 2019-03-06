---
title: Host Your Domain
taxonomy:
    category: docs
---

Depending on your requirements, you can host your domain on your local machine or on cloud servers. We recommend hosting on cloud servers such as DigitalOcean and Amazon EC2 if you want to open your domain to many visitors. 

**On This Page**

+ [Host Your Domain on DigitalOcean](#host-your-domain-on-digitalocean)

## Host Your Domain on DigitalOcean

High Fidelity has partnered with DigitalOcean to provide hosting options based on your requirements. 

+ [Host with DigitalOcean](#host-with-digitalocean)
+ [Configure Your Domain Settings](#configure-your-domain-settings)
+ [FAQ](#faq)

### Host with DigitalOcean

1. Log in or sign up with your High Fidelity username and password on [https://highfidelity.com](https://highfidelity.com).
2. Hover over your username to see the various menu options. Click **Cloud Domains**. You can also go to [https://highfidelity.com/user/cloud_domains](https://highfidelity.com/user/cloud_domains). ![](cloud-domains.png)
3. You'll be redirected to the Cloud Domains. Click 'Create New' to create a new cloud domain.
4. Before you set up a cloud domain, you need to connect your DigitalOcean account. If you don't have one, you can sign up now.   
5. You will be redirected to the DigitalOcean authorization page. Once you've signed in, choose the virtual machine to host your domain. Select the configuration that best suits your needs, keeping in mind that [our recommendations](#recommendations) are based on the number of users that will be visiting your domain.
6. Next, select the geographical location where you would like to host your server. 
7. Click 'Launch your cloud domain', and then 'Confirm'.  

You will be redirected to your Cloud Domains page, where you will see the domain server you just created being configured. ![](cloud-do-7.PNG) 

<a name="recommendations"></a>The table below outlines the recommended configuration based on numbers of users.  

| Users | DigitalOcean Droplet                              | Estimated Price |
| ----- | ------------------------------------------------- | --------------- |
| 10-15 | 8 GB Memory, 4 vCPUs, 80 GB SSD, 5 TB Transfer    | $40/mo          |
| 25-30 | 16 GB Memory, 6 vCPUs, 320 GB SSD, 6 TB Transfer  | $80/mo          |
| 40-50 | 32 GB Memory, 8 vCPUs, 640 GB SSD, 7 TB Transfer  | $160/mo         |
| 160   | 64 GB Memory, 32 vCPUs, 400 GB SSD, 9 TB Transfer | $640/mo         |

### Configure Your Domain Settings

You can configure your domain settings by clicking on the three dots on the right corner and selecting 'Domain Server settings' from the drop down. You will be prompted to [configure the basic server settings](../../your-domain/configure-settings#configure-basic-server-settings). 

![](cloud-do-9.PNG)



### FAQ

| Question                                                     | Solution                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Why isn’t my domain updating? Why is it stuck on 'updating'? | Check if your DigitalOcean account contains the right payment information. If the issue still persists, please contact High Fidelity support. |
| Is there a maximum file size for content archives my domain will accept? | Yes. The maximum file size depends on the size of the Droplet. If your file is bigger than your droplet, you can resize your Droplet. Go to your DigitalOcean account, find your Droplet, and select resize from the menu on the left. |
| How can I get into my domain settings if I forgot my username and password? | Go to https://highfidelity.com/user/cloud_domains. For your domain, click on the three dots on the right corner and select 'Reset Domain Server password' from the dropdown. Once your server restarts, click 'Domain Server settings' from the same dropdown. You will be prompted to set a new username and password. |
| Can I host assets on my Digital Ocean like I can host assets on my sandbox’s Asset Browser? | Yes. You can use the Asset Browser to host your assets while hosting your domain on DigitalOcean. |
| How do you power cycle your Droplet?                         | You can do this through your DigitalOcean account. Log in and select your Droplet. Select 'Power' on the menu to the left. Select 'Power Cycle'. |



**See Also**

+ [Configure Your Domain Settings](../../your-domain/configure-settings)