# Create the certificate
$cert = New-SelfSignedCertificate -Subject "CN=SwietoolskyWebApp" `
    -CertStoreLocation "Cert:\CurrentUser\My" `
    -KeyExportPolicy Exportable `
    -KeySpec Signature `
    -KeyLength 2048 `
    -KeyAlgorithm RSA `
    -HashAlgorithm SHA256 `
    -NotAfter (Get-Date).AddYears(2)

# Display the thumbprint (SAVE THIS!)
Write-Host "Certificate Thumbprint: $($cert.Thumbprint)" -ForegroundColor Green
Write-Host "Save this thumbprint - you'll need it!" -ForegroundColor Yellow



# Create temp folder if it doesn't exist
New-Item -Path "C:\Temp" -ItemType Directory -Force

# Set a strong password
$password = ConvertTo-SecureString -String "123456" -Force -AsPlainText

# Export PFX (private key) for Azure DevOps
Export-PfxCertificate -Cert $cert -FilePath "C:\Temp\SwietoolskyApp.pfx" -Password $password

# Export CER (public key) for Azure App Registration
Export-Certificate -Cert $cert -FilePath "C:\Temp\SwietoolskyApp.cer"

Write-Host "`nCertificates created successfully!" -ForegroundColor Green
Write-Host "Location: C:\Temp" -ForegroundColor Cyan
Write-Host "- SwietoolskyApp.pfx (keep secure!)" -ForegroundColor Yellow
Write-Host "- SwietoolskyApp.cer (upload to Azure)" -ForegroundColor Yellow

Certificate Thumbprint: 18D96AC4C9BC261DFCB63ED08C46621C0A56CDF9