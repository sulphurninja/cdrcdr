/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    "ACCESS_TOKEN_SECRET": "2MqS&V^f_&UudgstXMbnd3LTdC_zkSzBYVB#Q=9%Rdnfmjm&fFBW6zTE3^s646kJ",
    "REFRESH_TOKEN_SECRET": "S%=VY!nj3rkK@?VZ_v?bQVFzhz^rSA#vKgJ4Rkdsnfmxcb23j_XCjQXU?fY9AmA-MgJWHae9f*Xz%P*x$WaGT*7c8HM67B-R%Z_zcy",
    "MONGODB_URI": "mongodb+srv://aditya4sure:aditya@cluster0.efo7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  }
}

module.exports = nextConfig
