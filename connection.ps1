# Check if PnP.PowerShell is installed, if not install it
if (-not (Get-Module -ListAvailable -Name PnP.PowerShell)) {
    Write-Host "Installing PnP.PowerShell module..." -ForegroundColor Yellow
    Install-Module -Name PnP.PowerShell -Force -Scope CurrentUser
}

# Import the module
Import-Module PnP.PowerShell

# Test the connection
Connect-PnPOnline -Url "https://swietelskylnz.sharepoint.com/teams/DigitalisationConstructionServices" `
    -ClientId "adad1f9c-21d2-43e8-a7ed-807cd16607a3" `
    -Tenant "swietelskylnz.onmicrosoft.com" `
    -CertificatePath "C:\Temp\SwietoolskyApp.pfx" `
    -CertificatePassword (ConvertTo-SecureString -String "123456" -AsPlainText -Force)

# If successful, test downloading a file
Get-PnPList